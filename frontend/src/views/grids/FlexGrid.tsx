import ListCard from '../../components/cards/ListCard';
import './FlexGrid.scss';

const FlexGrid: React.FC = () => {
    return (
        <section className="my-12">
            <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
                <div className="w-[25%] flex-col order-1 rounded-md hidden border border-neutral-200 gap-2 dark:border-neutral-800 xl:flex lg:hidden md:hidden">
                    <div>
                        <img
                            className="rounded-md"
                            src="https://images.unsplash.com/photo-1633478062482-790e3b5dd810?q=80&w=2915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="sushi-image"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center order-2 px-8 py-4 border border-neutral-200 rounded-md dark:border-neutral-800 bg-neutral-900 xl:w-[50%] lg:w-[75%]">
                    <div>
                        <ListCard title="Our Sushi" list={[
                            {
                                title: "Freshness Unleashed",
                                description: "Indulge in the finest, impeccably sourced ingredients for an authentic taste of Japan."
                            },
                            {
                                title: "Masterful Craftsmanship",
                                description: "Our skilled chefs create culinary masterpieces with precision and passion."
                            },
                            {
                                title: "Diverse Delights",
                                description: "From classic nigiri to creative rolls, discover a menu that caters to every palate."
                            },
                            {
                                title: "Sustainable Sourcing",
                                description: "Enjoy guilt-free dining with our commitment to eco-friendly and responsibly harvested seafood."
                            },
                            {
                                title: "Cozy Elegance",
                                description: "Immerse yourself in a stylish and inviting ambiance, perfect for any occasion."
                            },
                            {
                                title: "Exceptional Service:",
                                description: "Experience unparalleled hospitality, making your visit a truly memorable one."
                            }
                        ]}/>
                    </div>
                </div>

                <div className="flex flex-row order-3 gap-2 lg:flex-col lg:w-[25%] md:w-[100%]">
                    <div className="flex justify-center gap-2 overflow-hidden border rounded-md border-neutral-200 dark:border-neutral-800">
                        <img className="h-auto rounded-md grid-image" src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56" alt="avo-sushi" />
                    </div>
                    <div className="flex justify-center gap-2 overflow-hidden border rounded-md border-neutral-200 dark:border-neutral-800">
                        <img className="h-auto rounded-md grid-image" src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db" alt="more-sushi" />
                    </div>
                    <div className="flex justify-center gap-2 overflow-hidden border rounded-md border-neutral-200 dark:border-neutral-800">
                    <img className="hidden h-auto rounded-md grid-image lg:flex" src="https://images.unsplash.com/photo-1607301404882-06d3c9778bac" alt="sushi" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FlexGrid;