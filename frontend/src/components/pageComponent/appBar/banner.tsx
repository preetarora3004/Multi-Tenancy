export const Banner = ()=> {
    return <div className="grid grid-cols-4 h-55  bg-banner">
        <div className="flex flex-col justify-center items-center">
            <div className="text-4xl font-bold">
                10,000+
            </div>

            <div className="text-gray-500">
                Active Tenants
            </div>
        </div>

        <div className="flex flex-col justify-center items-center">

            <div className="text-4xl font-bold">
                99.9%
            </div>

            <div className="text-gray-500">
                Uptime SLA
            </div>

        </div>

        <div className="flex flex-col justify-center items-center">

            <div className="text-4xl font-bold">
                500+
            </div>

            <div className="text-gray-500">
                Enterprise Client
            </div>

        </div>

        <div className="flex flex-col justify-center items-center">

            <div className="text-4xl font-bold justify-center items-center">
                24/7
            </div>

            <div className="text-gray-500">
                Support
            </div>

        </div>

    </div>
}