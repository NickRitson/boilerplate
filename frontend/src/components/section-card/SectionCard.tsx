interface SectionCardProps {
    children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ children }) => {
    return (
        <section className="p-6 border shadow-lg border-neutral-100 bg-neutral-50 rounded-2xl dark:bg-neutral-900 dark:border-neutral-800">
            {children}
        </section>
    );
};

export default SectionCard;
