import { techState } from "../state/scopedStates/TechState.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "./GameService.js";
import { AppState } from "../state/AppState.js";
import { statsState } from "../state/scopedStates/StatsState.js";
import { skillsService } from "./SkillsService.js";

class TechsService {
  async learnTechnology(newTech) {
    try {
      await this.determineProficiency(newTech);
      await gameService.reduceEnergyTimer(newTech);
    } catch (error) {
      logger.error('Tech learning process failed. Timer did not start', error);
    }
  }

  async handleEffects(newTech, startTime) {
    //ANCHOR - Left off here dealing with logic of 'not to try and learn every tech' but that advancing in proficiency is the goal, increasing problem solving skills over following the 'latest tech trends'
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
      if (foundTech.quantity === 0) {
        foundTech.proficiency === 'Beginner';
      } else if (foundTech.quantity === 1) {
        foundTech.proficiency === 'Intermediate';
      } else if (foundTech.quantity === 2) {
        foundTech.proficiency === 'Advanced';
        // await skillsService.autoUnlockSkillByRelatedTech(newTech);
        await skillsService.linkTechToSkill(newTech);
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
        multiplier: newTech.multiplier *= 3,
        isCompleted: true,
      }

      await gameService.addTechToStats(newTech)
      logger.log('Technology updated and added to learned technologies:', newTech, statsState)
    } catch (error) {
      logger.error('Could not update technology', error)
    }
  }
}

export const techsService = new TechsService();