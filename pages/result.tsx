import {useRouter} from "next/router"

export default function Result(){
    const router = useRouter();
    const{session_id} = router.query
    
    return (
        <div>
            <h1>Payment Result</h1>
            <pre>{session_id}</pre>

        </div>
    )
}