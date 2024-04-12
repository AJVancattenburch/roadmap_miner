import { AppState } from '../state/AppState'
import { statsState } from "../state/scopedStates/StatsState.js"
import { logger } from '../utils/Logger'
import { techsService } from "./TechsService.js"
import { Tech } from '../models/Tech.js'
import { statsService } from "./StatsService.js"
import { skillsService } from "./SkillsService.js"
import { Skill } from "../models/Skill.js"

class GameService {  
  async knowledgeClicker(knowledgeEarned = 0) {
    try {
      knowledgeEarned = AppState.knowledge - 500
      AppState.knowledgeEarned = knowledgeEarned
      
      if (statsState.learnedTechnologies.length === 0) {
        AppState.knowledge++
        logger.log('Knowledge gains (no multipliers):', AppState.knowledgeEarned)
      } else {
        techsService.handleEffects()
      }

    } catch (error) {
      logger.error('Could not gain knowledge', error)
    }
  }

  async reduceEnergyTimer(newTech) {
    
    let startTime = 0;
    const intervalId = setInterval(() => {
      if (startTime < newTech.energyCost) {
        techsService.handleEffects(newTech, startTime);
      } else {
        clearInterval(intervalId);
        techsService.handleEffects(newTech, newTech.energyCost);
        techsService.updateTechnology(newTech);
      }
      startTime++;
    }, 1000);
    logger.log('Energy consumed:', AppState.energy, 'Energy cost:', newTech.energyCost);
  }


  async addTechToStats(newTech) {
    try {
      const tech = new Tech(newTech)
      statsState.learnedTechnologies.push(tech)
      statsState.techStat = tech
      if (tech.proficiency === 'Advanced') {
        await skillsService.autoUnlockSkill(newTech);
      }
      logger.log('New technology learned!:', statsState.techStat)
    } catch (error) {
      logger.error('Could not update current stats', error)
    }
  }

  async addSkillToStats(newSkill) {
    try {
      const skill = new Skill(newSkill)
      statsState.skillsEarned.push(skill)
      statsState.skillStat = skill
      logger.log('New skill added to stats!:', statsState.skillStat)
    } catch (error) {
      logger.error('Could not update current stats', error)
    }
  }
}

export const gameService = new GameService()