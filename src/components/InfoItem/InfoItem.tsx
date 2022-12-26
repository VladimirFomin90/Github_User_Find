import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
    icon: React.ReactNode;
    text?: string | null;
    isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
    const currentText = text || "not available text";
    let currentLink: string = "";

    if (isLink) {
        currentLink =
            text && text.startsWith("http") ? text : `https://&{text}`;
    }

    return (
        <div className={`${styles.infoItem}${text ? "" : ` {styles.empty}`}`}>
            {icon}
			<div>
				{isLink && text ? (
					<a href={currentLink}
					target="_blank"
					rel="noreferrer"
					className={styles.link}
					>
						{currentText}
					</a>
				) : currentText}
			</div>
        </div>
    );
};
