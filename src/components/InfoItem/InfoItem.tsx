import styles from './InfoItem.module.scss';

interface InfoItemProps { }

export const InfoItem = ({ }: InfoItemProps) => (
  <div className={styles.infoItem}>
    InfoItem Component
  </div>
);
