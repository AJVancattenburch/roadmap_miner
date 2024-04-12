import { techState } from "../state/scopedStates/TechState.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "./GameService.js";
import { AppState } from "../state/AppState.js";
import { statsState } from "../state/scopedStates/StatsState.js";
import { skillsService } from "./SkillsService.js";

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
        AppState.knowledge += Math.floor(newTech.energyCost / 3);
        AppState.energy -= Math.floor(newTech.energyCost);
      } else {
        AppState.energy -= Math.floor(startTime + newTech.multiplier);
        AppState.knowledge += Math.floor(startTime + (newTech.multiplier * 1.25));
      }
      logger.log('Energy remaining from tech effects:', AppState.energy);
    }
  }

  async determineProficiency(newTech) {
    try {
      const foundTech = techState.technologies.find(tech => tech.id === newTech.id);

      if (foundTech.quantity === 1) {
        newTech.proficiency = 'Beginner';
      } else if (foundTech.quantity === 2) {
        newTech.proficiency = 'Intermediate';
      } else if (foundTech.quantity === 3) {
        newTech.proficiency = 'Advanced';
      }
      await gameService.addTechToStats(newTech);
      logger.log(`New proficiency level for ${foundTech.name}: ${foundTech.proficiency}`);
    } catch (error) {
      logger.error('Could not determine proficiency level', error);
    }
  }

  async updateTechnology(newTech) {
    try {
      
      newTech = {
        ...newTech,
        quantity: newTech.quantity += 1,
        energyCost: newTech.energyCost *= 2,
        multiplier: newTech.multiplier *= 3,
        isCompleted: true,
      }
      await this.determineProficiency(newTech);
      logger.log('Technology updated and added to learned technologies:', newTech, statsState)
    } catch (error) {
      logger.error('Could not update technology', error)
    }
  }
}

export const techsService = new TechsService();