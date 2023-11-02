import OrderHistoryPage from '../../OrderHistoryPage.jsx/OrderHistoryPage';
import AccountTemplate from '../AccountTemplate';

function AccountOrders() {
    const settings = {
        header: 'orders',
        page: <OrderHistoryPage />,
    };
    return (
        <>
            <AccountTemplate settings={settings} />
        </>
    );
}

export default AccountOrders;
