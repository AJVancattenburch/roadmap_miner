import { AppState } from "../state/AppState.js"
import { skillState } from "../state/scopedStates/SkillState.js"
import { logger } from "../utils/Logger.js"
import { Skill } from "../models/Skill.js"
import { techState } from './../state/scopedStates/TechState';

class SkillsService {
  async getSkills() {
    const skills = skillState.skills.map(skill => new Skill(skill))
    return skills
  }

  async autoUnlockSkill(newSkill) {
    try {
      const techNameMatches = techState.technologies.filter(tech => tech.name === newSkill.name)
      const techNameMatchesCount = techNameMatches.length >= 1
      if (techNameMatches) {
        while (techNameMatchesCount) {
          await this.earnSkill(techNameMatches, newSkill)
        }
      }
      // skillState.activeSkill = newSkill
      // newSkill.requiredTech = techNameMatches
      // newSkill.requirementCount = techNameMatches.length
      

      logger.log('Added required technologies and count requirement to pertaining skills:', newSkill)
    } catch (error) {
      logger.error('Could not match tech to skill', error)
    }    
  }

  async learnSkill(techNameMatches, newSkill) {
    try {
      const metTechRequirements = techNameMatches.length === newSkill.requirementCount
      const hasEnoughEnergy = AppState.energy >= newSkill.energyCost
      if (metTechRequirements && hasEnoughEnergy) {
        newSkill.quantity++
        newSkill.requirementCount = techNameMatches.length++
        AppState.knowledge += 
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