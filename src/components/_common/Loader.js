export default function Loader() {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen bg-black flex justify-center items-center'>
            <span className="relative flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blx-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-blx-gold"></span>
            </span>
        </div>
    )
}