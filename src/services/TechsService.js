import { techState } from "../state/scopedStates/TechState.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "./GameService.js";
import { AppState } from "../state/AppState.js";
import { statsState } from "../state/scopedStates/StatsState.js";

class TechsService {
  async learnTechnology(newTech) {
    try {
      await gameService.reduceEnergyTimer(newTech);
    } catch (error) {
      logger.error('Tech learning process failed. Timer did not start', error);
    }
  }

  async handleEffects(newTech, startTime) {
    if (startTime < newTech.energyCost) {
      if (newTech.quantity === 0) {
        logger.log('Energy usage:', startTime);
        AppState.energy--;
      } else {
        AppState.energy -= newTech.multiplier;
        AppState.knowledge += newTech.energyCost / 10;
      }
      await this.determineProficiency(newTech);
      logger.log('Energy remaining from tech effects:', AppState.energy);
    }
  }

  async determineProficiency(newTech) {
    try {
      const foundTech = techState.technologies.find(tech => tech.id === newTech.id);
      if (foundTech.quantity === 0) {
        foundTech.proficiency = 'Beginner';
      } else if (foundTech.quantity === 1) {
        foundTech.proficiency = 'Intermediate';
      } else if (foundTech.quantity === 2) {
        foundTech.proficiency = 'Advanced';
      }
      logger.log(`New proficiency level for ${foundTech.name}: ${foundTech.proficiency}`);
    } catch (error) {
      logger.error('Could not determine proficiency level', error);
    }
  }

  async updateTechnology(newTech) {
    try {
      newTech = {
        ...newTech,
        quantity: newTech.quantity++,
        energyCost: newTech.energyCost *= 2,
        multiplier: newTech.multiplier *= 2,
        proficiency: newTech.proficiency,
        isCompleted: true,
      }

      await this.addToStats(newTech);
      logger.log('Technology updated and added to learned technologies:', newTech, statsState)
    } catch (error) {
      logger.error('Could not update technology', error)
    }
  }

  async addToStats(newTech) {
    try {
      const index = techState.technologies.findIndex(tech => tech.id === newTech.id);
      techState.technologies.splice(index, 1, newTech);
      statsState.learnedTechnologies.push(newTech);
    } catch (error) {
      logger.error('Could not complete proficiency level', error);
    }
  }
}

export const techsService = new TechsService();