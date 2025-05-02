import type React from "react"
import type { TimelineEvent } from "../../../types/invitation"
import styles from "../../../styles/Timeline.module.css"

interface TimelineProps {
  events: TimelineEvent[]
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineTrack}></div>

      <div className={styles.timelineEvents}>
        {events.map((event, index) => (
          <div key={index} className={styles.timelineEvent}>
            <div className={styles.timelineMarker}></div>

            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <span className={styles.timelineTime}>{event.time}</span>
                <h4 className={styles.timelineTitle}>{event.title}</h4>
              </div>
              <p className={styles.timelineDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
