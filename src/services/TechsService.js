import { AppState } from "../state/AppState.js";
import { statsState } from "../state/scopedStates/StatsState.js";
import { techState } from "../state/scopedStates/TechState.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "./GameService.js";

class TechsService {
  async getTechnologies() {
    try {
      const techs = techState.technologies.map(t => t)
      return techs
    } catch (error) {
      logger.error('Could not get all technologies', error)
    }
  }
  async learnTechnology(newTech) {
    try {
      const techEnergy = newTech.energyCost 
      const techQuantity = newTech.quantity
      const newTechMultiplier = newTech.multiplier
      let startTime = 0
      const intervalId = setInterval(() => {
        startTime++
        if (techQuantity === 0) {
        AppState.energy--
        } else {
          AppState.energy -= newTechMultiplier
        }
        logger.log('Energy consumed:', AppState.energy)
        if (startTime === techEnergy + 1) {
          clearInterval(intervalId)
          this.updateTechnology(newTech)
          logger.log('Technology learned:', newTech)
        }
      }, 1000)
      logger.log('Energy consumed:', AppState.energy, 'Energy cost:', techEnergy)
    } catch (error) {
      logger.error('TechSkillsService | updateTechnology method failed', error);
    }
  }

  async updateTechnology(newTech) {
    try {
      newTech = {
        isCompleted: true,
        quantity: newTech.quantity++,
        energyCost: newTech.energyCost *= 2,
        multiplier: newTech.multiplier += 1
      }

      statsState.learnedTechnologies.push(newTech)
      logger.log('Technology updated and added to learned technologies:', newTech, statsState.learnedTechnologies)
    } catch (error) {
      logger.error('Could not update technology', error)
    }
  }
}

export const techsService = new TechsService()