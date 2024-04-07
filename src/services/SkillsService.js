import { AppState } from "../state/AppState.js"
import { skillState } from "../state/scopedStates/SkillState.js"
import { techState } from "../state/scopedStates/TechState.js"
import { logger } from "../utils/Logger.js"
import { Skill } from "../models/Skill.js"

class SkillsService {
  async getSkills() {
    const skills = skillState.skills.map(skill => new Skill(skill))
    return skills
  }

  async autoUnlockSkill(newSkill) {
    try {
      const techNameMatches = techState.technologies.find(tech => tech.name === newSkill.name)
      skillState.activeSkill = newSkill
      newSkill.requiredTech = techNameMatches
      newSkill.requirementCount = techNameMatches.length

      await this.earnSkill(techNameMatches, newSkill)
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

  async updateSkill(skillId, updatedSkill) {
  
  }
}

export const skillsService = new SkillsService()