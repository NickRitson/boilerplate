import './TechCard.scss';

interface TechCardProps {
    name: string;
    description: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, description }) => {
    return (
        <div className="card">
            <h2 className="name">{name}</h2>
            <p className="description">{description}</p>
        </div>
    );
};

export default TechCard;
