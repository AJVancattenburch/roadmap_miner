import { techState } from "../state/scopedStates/TechState.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "./GameService.js";
import { AppState } from "../state/AppState.js";
import { statsState } from "../state/scopedStates/StatsState.js";

class TechsService {
  async learnTechnology(newTech) {
    try {
      gameService.consumeEnergy(newTech);
    } catch (error) {
      logger.error('TechSkillsService | learnTechnology method failed', error);
    }
  }

  async handleEffects(newTech) {
    await this.determineProficiency(newTech);
    if (newTech.quantity === 0) {
      logger.log('Energy consumed:', AppState.energy);
      AppState.energy--;
    }
    AppState.energy -= newTech.multiplier;
    AppState.knowledge += newTech.energyCost / 10;

    logger.log('Energy consumation multiplied:', AppState.energy);
  }

  async determineProficiency(newTech) {
    try {
      if (newTech.quantity === 0) {

        newTech.proficiency = 'Beginner';
      } else if (newTech.quantity === 1) {
        newTech.proficiency = 'Intermediate';
      }
      newTech.proficiency = 'Advanced';
    } catch (error) {
      logger.error('Could not determine proficiency', error);
    }
  }

  async updateTechnology(newTech) {
    try {
      newTech = {
        name: newTech.name,
        category: newTech.category,
        quantity: newTech.quantity++,
        energyCost: newTech.energyCost *= 2,
        multiplier: newTech.multiplier += 1,
        proficiency: newTech.proficiency,
        isCompleted: true,
      }

      statsState.learnedTechnologies.push(newTech)
      logger.log('Technology updated and added to learned technologies:', newTech, statsState)
    } catch (error) {
      logger.error('Could not update technology', error)
    }
  }
}

export const techsService = new TechsService()