import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react'
export default function Dashboard({ auth,applications }) {
    const handleAction = (form_id, action) => {
        router.post('/forms/update', { form_id, action })
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
                            <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Gender
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Date of Birth
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Nationality
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    CV Attachment
                                </th>

                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    HR Coordinator Status
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    HR Manager Status
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {applications.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {item.name}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {item.gender}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {item.date_of_birth}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {item.nationality}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <a href={`storage/${item.cv_attachment}`} target="_blank" rel="noopener noreferrer">View
                                            CV</a>
                                    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {item.hr_coordinator_status}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {item.hr_manager_status}
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button onClick={() => handleAction(item.id, 'accept')}
                                                className="text-green-500 hover:text-green-700">Accept
                                        </button>
                                        <button onClick={() => handleAction(item.id, 'reject')}
                                                className="text-red-500 hover:text-red-700 ml-4">Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
