export default function Header() {
    return (
        <header className="flex justify-between bg-[#1A3263] w-full p-4">
            <h1 className="text-[#FAB95B] ml-20 font-semibold">Country Explorer</h1>

            <div className="flex gap-6">
                <span className="text-white font-medium mr-4">Home</span>
                <span className="text-white font-medium mr-20">Países</span>
            </div>
        </header>
    );
}