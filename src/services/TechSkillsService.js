import { AppState } from "../state/AppState.js";
import { techState } from "../state/scopedStates/TechState.js";
import { skillState } from "../state/scopedStates/SkillState.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "./GameService.js";

class TechSkillsService {
  async startProgressBar(newTech) {
    try {
      logger.log('TechSkillsService | startProgressBar method called')
      const selectedTech = techState.technologies.find(tech => tech.id === newTech.id)
      techState.activeTech = selectedTech
      if (selectedTech) {
        await this.processTechnology(selectedTech)
        logger.log('TechSkillsService | startProgressBar method complete ▶️ processTechnology method called')
      }
    } catch (error) {
      logger.error('Error in TechSkillsService | learnTechnology method failed', error)
    }
  }

  async processTechnology(selectedTech) {
    let techMultiplier = 0
    techMultiplier = selectedTech.multiplier * selectedTech.quantity
    selectedTech.quantity++
    AppState.knowledge += techMultiplier
    //Send the 
    logger.log('New tech multiplier value:', techMultiplier)

    await gameService.consumeEnergy(selectedTech.energyCost, selectedTech.quantity)
  }

  async getAllTechnologies() {
    try {
      logger.log('TechSkillsService | getAllTechnologies method called')
      const techs = techState.technologies.map(t => t)
      await this.getAffiliatedSkill()
      logger.log('TechSkillsService | getAllTechnologies method complete', techs)
      return techs
    } catch (error) {
      logger.error('Could not get all technologies', error)
    }
  }

  async getAffiliatedSkill(skillId) {
    try {
      const skillNameMatches = skillState.skills.find(skill => skill.id === skillId)
      logger.log('TechSkillsService | getAffiliatedSkill method complete', skillNameMatches)
      skillState.activeSkill = skillNameMatches
    } catch (error) {
      logger.error('Could not match tech to skill', error)
    }
  }

  async getAllSkills() {
    try {
      logger.log('TechSkillsService | getAllSkills method called')
      const skills = skillState.skills.map(s => s)
      logger.log('TechSkillsService | getAllSkills method complete', skills)
      return skills
    } catch (error) {
      logger.error('Could not get all skills', error)
    }
  }

  async unlockSkill(newSkill) {
    try {
      const techNameMatches = techState.technologies.find(tech => tech.name === newSkill.name)
      skillState.activeSkill = newSkill
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
      const metTechRequirements = techNameMatches.length === newSkill.requirementCount
      const hasEnoughEnergy = AppState.energy >= newSkill.energyCost
      const increasedAmount = techNameMatches.length * newSkill.multiplier
      if (metTechRequirements && hasEnoughEnergy) {
        newSkill.quantity++
        newSkill.requirementCount += increasedAmount
        AppState.knowledge += increasedAmount
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