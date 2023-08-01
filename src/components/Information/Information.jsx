

const Information = (props) => {
    const {img, section, jobs} = props.doc;
    console.log(props)
    return (
        <div className=' bg-slate-100 box-border h-40 w-40 p-4 ml-12 mr-12 mb-4'>
<img src={img} alt="" />
<p className='font-bold py-4'>{section}</p>
<p>{jobs}</p>
        </div>
    );
};

export default Information;