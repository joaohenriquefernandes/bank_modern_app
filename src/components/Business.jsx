import { features } from "../constants"
import styles, { layout } from "../styles"
import { Button } from './Button'
import { FeatureCard } from "./FeatureCard"

export function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we will handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With then right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeatureCard 
              key = {feature.id}
              {...feature}
              index = {index}
            />
          ))
        }
      </div>
    </section>
  )
}