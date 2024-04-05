import { Tech } from "../models/Tech.js";
import { AppState } from "../state/AppState.js";
import { techState } from "../state/scopedStates/TechState.js";
import { skillState } from "../state/scopedStates/SkillState.js";
import { logger } from "../utils/Logger.js";

class TechSkillsService {

  async learnTechnology(techCategory, techId) {
    // Check if user has more or equal energy to the cost of the technology
    // If true, subtract the energy cost from the user's energy by the cost of the technology
    // Add the technology to the user's list of technologies, increment the quantity of the technology by 1
    // Then call the techEffects method to apply the multiplier effect of the technology
  }

  async techEffects() {
    let techMultiplier = 0
    techState.technologies.forEach(tech => techMultiplier += tech.multiplier * tech.quantity)
    AppState.knowledge += techMultiplier
  }

  async setTechRequiredForSkill(newSkill) {
    try {
      const techNameMatches = techState.technologies.find(tech => tech.name === newSkill.name)
      newSkill.requiredTech = techNameMatches
      newSkill.requirementCount = techNameMatches.length

      this.learnSkill(techNameMatches, newSkill)
      logger.log('Added required technologies and count requirement to pertaining skills:', newSkill)
    } catch (error) {
      logger.error('Could not match tech to skill', error)
    }
  }

  async learnSkill(techNameMatches, newSkill) {
    try {
      const techCountIsEqual = techNameMatches.length === newSkill.requirementCount
      const hasEnoughEnergy = AppState.energy >= newSkill.energyCost
      const increasedBySkill = techNameMatches.length * newSkill.multiplier
      if (techCountIsEqual && hasEnoughEnergy) {
        newSkill.quantity++
        newSkill.requirementCount += increasedBySkill
        AppState.knowledge += increasedBySkill
        logger.log('Knowledge gained:', AppState.knowledge)
        await this.skillEffects()
        
      }
    } catch (error) {
      logger.error('Could not add skill', error)
    }
  }

  async skillEffects() {
    let skillMultiplier = 0
    skillState.skills.forEach(skill => skillMultiplier += skill.multiplier * skill.quantity)
    AppState.knowledge += skillMultiplier
  }
}

export const techSkillsService = new TechSkillsService()