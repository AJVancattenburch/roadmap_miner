import { AppState } from "../state/AppState.js";
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
      const selectedTech = techState.technologies.find(tech => tech.id === newTech.id)
      techState.activeTech = selectedTech
      if (selectedTech) {
        await this.updateTechnology(selectedTech)
        logger.log('TechSkillsService | learnTechnology method complete ▶️ updateTechnology method called')
      }
    } catch (error) {
      logger.error('Error in TechSkillsService | learnTechnology method failed', error)
    }
  }

  async updateTechnology(selectedTech) {
    try {
      let techMultiplier = 0
      techMultiplier = selectedTech.multiplier * selectedTech.quantity
      selectedTech.quantity++
      AppState.stats.push(selectedTech)
      AppState.knowledge += techMultiplier

      logger.log('New tech multiplier value:', techMultiplier)
      await gameService.useEnergy(selectedTech.energyCost, selectedTech.quantity)
    } catch (error) {
      logger.error('TechSkillsService | updateTechnology method failed', error)
    }
  }
}

export const techsService = new TechsService()