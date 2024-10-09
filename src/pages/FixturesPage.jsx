import ContainerComponent from "@/components/ContainerComponent"
import sort from '../assets/img/Sort.svg'
import Down from '../assets/img/Down.png'
import image from '../assets/img/VALORANT.png'
import { IoFunnelSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LargeCards, Cards, GameCards } from '../components/Cards/Cards'
const FixturesPage = () => {
    return (

        <ContainerComponent>
            <LargeCards img={image} />
            <div className="flex flex-wrap mt-5 gap-5">
                <Cards title={'Continue playing'} content='Start or esume tournaments you have registered for' img={image} button="Continue playing" />
                <Cards title="Quick match" content="Create a tournament and invite friends to play" img={image} button="Let's go" />
            </div>
            <div className="mt-5">
                <div className="flex flex-wrap justify-between items-center mb-[18px]">
                    <h1 className="font-swiss  text-4xl scale-y-75 tracking-wider font-bold text-white">
                        Tournaments
                    </h1>
                    <div className="flex gap-4 ">
                        <div className="flex gap-4 text-[#DBD9D9] bg-[#1C1C1C] items-center p-2 ">
                            <div className="flex">
                                <img src={sort} alt="" />
                            </div>
                            <p>
                                Sort by
                            </p>
                            <div className="flex">
                                <img src={Down} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-4 text-[#DBD9D9] bg-[#1C1C1C] items-center p-2 ">
                            <div className="flex">
                                <IoFunnelSharp />
                            </div>
                            <p>
                                filter
                            </p>
                            <div className="flex">
                                <img src={Down} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-5">
                    <Link to={'/insidetournament'}> <GameCards /></Link>
                    <Link to={'/insidetournament'}> <GameCards /></Link>
                    <Link to={'/insidetournament'}> <GameCards /></Link>
                    <Link to={'/insidetournament'}> <GameCards /></Link>
                    <Link to={'/insidetournament'}> <GameCards /></Link>
                    <Link to={'/insidetournament'}> <GameCards /></Link>
                </div>
            </div>
        </ContainerComponent>

    )
}

export default FixturesPage
