import { Milestone } from "../models/Milestone"
import { milestoneState } from "../state/scopedStates/MilestoneState"
import { logger } from "../utils/Logger"
import { gameService } from "./GameService.js"

class MileStonesService {
  async checkMilestoneStatus(skillCount) {
    try {
      const reachedMilestone = milestoneState.milestones.find(milestone => milestone.reqSkillCount === skillCount)
      await this.completeMilestone(reachedMilestone)
    } catch (error) {
      logger.error('Could not link skill to milestone', error)
    }
  }

  async completeMilestone(reachedMilestone) {
    try {
      if (reachedMilestone) {
        reachedMilestone.isComplete = true
        logger.log('🚩 New Milestone Reached! 🚩:', reachedMilestone)
        await this.setCurrentMilestone(reachedMilestone)
      }
    } catch (error) {
      logger.error('Could not add milestone', error)
    }
  }

  async setCurrentMilestone(milestone) {
    try {
      const currentMilestone = new Milestone(milestone)
      milestoneState.activeMilestone = currentMilestone
      logger.log('Current milestone:', milestoneState.activeMilestone)
      await gameService.increaseKnowledgePerClick(milestone.multiplier)
    } catch (error) {
      logger.error('Could not set current milestone', error)
    }
  }
}

export const mileStonesService = new MileStonesService()