import { Milestone } from "../models/Milestone"
import { milestoneState } from "../state/scopedStates/MilestoneState"
import { logger } from "../utils/Logger"

class MileStonesService {
  async checkMilestoneStatus(skillCount) {
    try {
      const newMilestone = milestoneState.milestones.find(milestone => milestone.reqSkillCount === skillCount)
      logger.log('Milestone unlocked:', newMilestone)
      await this.unlockMilestone(newMilestone)
    } catch (error) {
      logger.error('Could not check milestone status', error)
    }
  }

  async unlockMilestone(newMilestone) {
    try {
      const earnedMilestone = new Milestone(newMilestone)
      earnedMilestone.isUnlocked = true
      milestoneState.activeMilestone = earnedMilestone
      logger.log('Milestone unlocked:', newMilestone)
    } catch (error) {
      logger.error('Could not unlock milestone', error)
    }
  }
}

export const mileStonesService = new MileStonesService()