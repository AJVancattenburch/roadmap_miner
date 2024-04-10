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
      logger.error('TechSkillsService | learnTechnology method failed', error);
    }
  }

  async handleEffects(newTech, startTime) {
    if (startTime < newTech.energyCost) {
      if (newTech.quantity === 0) {
        logger.log('Energy consumed:', startTime);
        AppState.energy--;
      } else {
        AppState.energy -= newTech.multiplier;
        AppState.knowledge += newTech.energyCost / 10;
      }
      logger.log('Energy remaining:', AppState.energy);
    }
  }

  async determineProficiency(newTech) {
    try {
      const foundTech = techState.technologies.find(tech => tech.id === newTech.id);
      logger.log('Found technology:', foundTech);
      if (foundTech.quantity === 0) {
        foundTech.proficiency = 'Beginner';
      } else if (foundTech.quantity === 1) {
        foundTech.proficiency = 'Intermediate';
      } else if (foundTech.quantity === 2) {
        foundTech.proficiency = 'Advanced';
      }
    } catch (error) {
      logger.error('Could not determine proficiency', error);
    }
  }

  async updateTechnology(newTech) {
    try {
      
      newTech = {
        ...newTech,
        quantity: newTech.quantity++,
        energyCost: newTech.energyCost *= 2,
        multiplier: newTech.multiplier *= 2,
        isCompleted: true,
      }

      // statsState.learnedTechnologies.push(newTech)
      await gameService.addTechToStats(newTech)
      logger.log('Technology updated and added to learned technologies:', newTech, statsState)
    } catch (error) {
      logger.error('Could not update technology', error)
    }
  }
}

export const techsService = new TechsService()