

export default function NavButton({ children, onClick}: {children: any; onClick?: ()=>void;}) {
    return (
        <div className="flex-1 flex items-center h-[3vw] text-white cursor-pointer hover:font-bold" onClick={onClick}>
            <div className="w-full text-center">{children}</div>
        </div>
    );
}