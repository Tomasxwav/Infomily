export default function Videoloading() {
    return (
        <div className="flex flex-col items-center gap-8">
            <h2 className="font-extrabold text-3xl">Cargando...</h2>
            <div className="flex flex-col gap-6">
                <div className="size-36 bg-white"></div>
                <p className="max-w-36">Espere un momento...</p>
            </div>
        </div>       
    )
}