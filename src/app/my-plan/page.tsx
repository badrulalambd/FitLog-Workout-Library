import InfoTable from '@/components/my-plan/InfoTable';
import PlanTabs from '@/components/my-plan/PlanTabs';

const MyPlanPage = () => {
    return (
        <div className="bg-[#0F1115] text-gray-200 pt-38 pb-15">
            <div className='container mx-auto grid grid-cols-1 gap-10'>
                {/* Header Section */}
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">My Plan</h2>
                        <p className="text-[18px] lg:text-[20px] font-semibold text-gray-400 mt-3">Cap of five lifts for today. Finish them, then load more.</p>
                    </div>
                </div>

                {/* Table Section.... */}
                <InfoTable />

                {/* Tab section with planed and saved workout list and filtering dropdow */}
                <PlanTabs />

            </div>
        </div>
    );
};

export default MyPlanPage;