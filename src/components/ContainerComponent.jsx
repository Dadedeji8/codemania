const ContainerComponent = ({ children }) => {
    return (
        <div className='md:ml-[248px] w-full md:w-[calc(100%-248px)]  pt-[100px] bg-[#0F0F0F] p-4'>
            {children}
        </div>
    );
}

export default ContainerComponent;
