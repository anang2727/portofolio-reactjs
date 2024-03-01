import { faHome, faInfoCircle, faLayerGroup, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import ikon faEnvelope
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavIkon = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
        id: 2,
        title: "About",
        path: "/about",
        icon: <FontAwesomeIcon icon={faInfoCircle} />,
    },
    {
        id: 3,
        title: "Projects",
        path: "/projects",
        icon: <FontAwesomeIcon icon={faLayerGroup} />,
    },
    {
        id: 4,
        title: "Contacts",
        path: "/contact",
        icon: <FontAwesomeIcon icon={faEnvelope} />, // Menggunakan ikon faEnvelope untuk kontak
    }
]

export default NavIkon;
