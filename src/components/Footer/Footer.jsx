import foot from '../../assets/Icons/Group 9969.png';

const Footer = () => {
    return (
        <div className="flex space-x-24 bg-black box-border  p-8 text-white gap-20 h-full">
            <div className="">
                <h4 className="mt-24 mb-4">Job Hunt</h4>
                <p className='pb-4'><small >There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br />  suffered alteration in some form.</small></p>
                <img src={foot} alt="" />
            </div>
            <div className="">
                <h4 className="mt-24 mb-4 ">Company</h4>
                <p > <small >About Us  <br />
                    Work <br />
                    Latest News <br />
                    Careers</small>
                </p>
            </div>
            <div className="">
                <h4 className="mt-24 mb-4 ">Product</h4>
                <p className='text-slate-100'> <small>Prototype <br />
                    Plans & Pricing <br />
                    Customers <br />
                    Integrations</small>
                    
                </p>
            </div>
            <div className="">
                <h4 className="mt-24 mt-24 mb-4">Support</h4>
                <p className="">
                    <small>Help Desk <br />
                    Sales <br />
                    Become a Partner <br />
                    Developers
                    </small>
                </p>
            </div>
            <div className="">
                <h4 className="mt-24 mb-4">Contact</h4>
                <p className="">
                    <small>524 Broadway, NYC <br />
                    +1 777 - 978 - 5570
                    </small>
                </p>

            </div>
            <hr />
        </div>

    );
};

export default Footer;