import { Building2, Database, Settings, Shield, Users, Zap } from "lucide-react"
import { FeatureCard } from "../../util/feature_card"

export const Feature = ()=> {
    return <div className="grid grid-cols-3 gap-4 pt-15">

        <div className="ml-6"><FeatureCard component = {<Building2 size={37} />} heading={"Tenant Isolation"} description={"Complete data separation and security between tenants with robust isolation mechanisms."}/></div>

        <div className="ml-3">
            <FeatureCard component = {<Database size={37}/>} heading={"Scalable Architecture"} description={"Efficiently serve thousands of tenants with optimized resource allocation and auto-scaling."}/>
        </div>

        <div>
            <FeatureCard component = {<Settings size={37} />} heading={"Custom Configurations"} description={"Allow each tenant to customize their environment while maintaining system integrity."}/>
        </div>

        <div className="ml-6">
            <FeatureCard component = {<Shield size={37}/>} heading={"Enterprise Security"} description={"Bank-grade security with role-based access control and compliance certifications."}/>
        </div>

        <div className="ml-3">
            <FeatureCard component = {<Zap size={37}/>} heading={"High Performance"} description={"Lightning-fast response times with intelligent caching and optimized queries."}/>
        </div>

        <div>
            <FeatureCard component = {<Users size={37} />} heading={"User Management"} description={"Comprehensive user and permission management across all tenant organizations."}/>
        </div>

    </div>
}