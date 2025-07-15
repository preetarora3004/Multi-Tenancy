
interface FeatureCardType {
    component : React.ReactNode,
    heading : string,
    description : string
}

export const FeatureCard = ({component, heading, description} : FeatureCardType) => {
    return <div>

            <div className="flex flex-col justify-center mb-6 items-center w-110 h-55 rounded-md border-solid border gap-3 border-gray-200">

                <div className="h-15 w-15 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-700">
                    {component}
                  </span>
                </div>

                <div className="text-xl font-medium">
                    {heading}
                </div>

                <div className="text-gray-500 w-100 text-md text-center">
                    {description}
                </div>

            </div>

        </div>
}