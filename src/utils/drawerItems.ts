import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";

// icons 
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CalenderMonthIcon from '@mui/icons-material/CalendarMonth'
import ReviewsIcon from '@mui/icons-material/Reviews'
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite'
import TryIcon from '@mui/icons-material/Try'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const drawerItems = (role: UserRole): DrawerItem[] => {
    const roleMenus: DrawerItem[] = []

    const defaultMenus = [
        {
            title: 'Profile',
            path: `${role}/profile`,
            icon: AccountBoxIcon,
        }
    ]
    switch (role) {
        case USER_ROLE.SUPER_ADMIN:
            roleMenus.push({
                title: 'Dashboard',
                path: `${role}`,
                icon: DashboardIcon,
            },
                {
                    title: 'Manage Users',
                    path: `${role}/`,
                    icon: GroupIcon,
                }
            );
            break;
        case USER_ROLE.ADMIN:
            roleMenus.push(
                {
                    title: 'Dashboard',
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: 'Specialties',
                    path: `${role}/specialties`,
                    icon: TryIcon,
                },
                {
                    title: 'Doctors',
                    path: `${role}/doctors`,
                    icon: MedicalInformationIcon,
                },
                {
                    title: 'Schedules',
                    path: `${role}/schedules`,
                    icon: CalenderMonthIcon,
                },
                {
                    title: 'Appointments',
                    path: `${role}/appointments`,
                    icon: AirlineSeatIndividualSuiteIcon,
                },
                {
                    title: 'Reviews',
                    path: `${role}/reviews`,
                    icon: ReviewsIcon,
                },
            );
            break;
        case USER_ROLE.DOCTOR:
            roleMenus.push(
                {
                    title: 'Dashboard',
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: 'Schedules',
                    path: `${role}/schedule`,
                    icon: CalenderMonthIcon,
                },
                {
                    title: 'Appointments',
                    path: `${role}/appointment`,
                    icon: CalenderMonthIcon,
                }
            );
            break;
        case USER_ROLE.PATIENT:
            roleMenus.push(
                {
                    title: 'Appointments',
                    path: `${role}/appointments`,
                    icon: DashboardIcon,
                },
                {
                    title: 'Prescription',
                    path: `${role}/prescriptions`,
                    icon: DashboardIcon,
                },
                {
                    title: 'Payment History',
                    path: `${role}/payment-history`,
                    icon: CalenderMonthIcon,
                }
            );
            break;

        default:
            break;
    }


    return [...roleMenus, ...defaultMenus];
};