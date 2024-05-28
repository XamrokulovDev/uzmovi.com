import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const { data, navbarList } = useContext(UserContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setOpen] = useState(false);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data?.filter((item) =>
        item.original_title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <nav className='bg-[#222933] text-white max-lg:relative max-lg:py-3'>
            <div className="container mx-auto flex justify-between items-center max-lg:w-[90vw]">
                <NavLink to="/" className='w-[300px] max-lg:w-[200px]'><img src={logo} alt="" /></NavLink>
                <ul className={`flex items-center gap-3 menu ${isOpen ? 'max-lg:flex-col max-lg:absolute top-[100%] right-0 max-lg:backdrop-opacity-60 max-lg:bg-[#2b2a2aec] max-lg:z-40 max-lg:w-full' : 'max-lg:hidden'}`}>
                    {navbarList?.map((item) => (
                        <li key={item.id} className='menu_item flex py-10 px-8 transition-all delay-75 hover:text-white max-lg:py-2 max-lg:w-full'>
                            <NavLink to={item.to} className="menu_link max-lg:center">{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className='max-lg:hidden'>
                    <input
                        type="search"
                        className='search'
                        placeholder='Search movie'
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
                <div className="hidden max-lg:block">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
            {searchQuery && (
                <div className="container mx-auto my-20">
                    <div className='grid grid-cols-3 gap-10'>
                        {filteredData?.map((item) => (
                            <div className="card transition-all hover:-translate-y-[25px] shadow-handle" key={item._id}>
                                <img className='w-full' src={item.backdrop_path} alt="" />
                                <div className="card_body px-5 py-3">
                                    <h3>{item.original_title}</h3>
                                    <p className='py-2'>{item.overview.slice(0,120)}...</p>
                                    <p>{item.first_aired}</p>
                                    <NavLink to="/card" className='movie_btn' onClick={()=>setCard(item)}>See movie</NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
