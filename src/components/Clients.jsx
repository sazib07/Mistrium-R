
import Container from'./container'
import ClientItem from'./ui/clientItem';
import Flex from './ui/flex'
import div1Image from '../assets/div1.png'
import div2Image from '../assets/div2.png'

const Clients = () => {
    let ClientName =[
        {
            name:"Samsung",
            href:"#"
        },
         {
            name:"Google",
            href:"#"
        },
           {
            name:"IBM",
            href:"#"
        },
           {
            name:"DaraZ",
            href:"#"
        },
           {
            name:"Amazon",
            href:"#"
        },
    ]
  return (
         <Container>
                <h4 className="lg:text-[23px] font-bold font-gupter text-center lg:mt-[105px]">
                 SOME OF OUR TRUSTED CLIENTS</h4>
            <Flex className="items-center justify-between mt-[20px] lg:mt-[91px] ">
                <ul className="flex flex-col lg:flex-row lg:gap-35 lg:text-[45px] text-[22px] font-bold font-gupter lg:w-[235px] lg:h-[52px] text-[#72696A] justify-around mx-auto lg:mx-0 text-center list-none ">
                    {
                        ClientName.map((item)=>(
                            <ClientItem item={item}/>
                        ))
                    }
                </ul>
            </Flex>
            <Flex className="flex flex-col lg:flex-row lg:mt-[66px]">
                   <Flex className="relative justify-between mt-[30px] lg:w-[580px] lg:h-[400px]">
                    <div className="ml-5"> 
                     <h5 className="lg:text-[30px] font-bold font-gupter mt-[50px] lg:mt-[94px]">  
                        Office Furniture
                    </h5>
                    <h4 className="text-[#C4A586] text-[20px] lg:mt-[41px]  font-gupter">
                        Browse More Collection
                    </h4>
                    </div>
                 <div className="lg:mt-[30px] lg:mr-[38px]">
                     <img src={div1Image} lt="clientImage" />
                   </div>
                   </Flex>
               <Flex className=" relative lg:w-[870px] lg:h-[300px] bg-[#C4A586] justify-between">
                 <div className="ml-5">
                <h5 className="lg:text-[30px] font-bold font-gupter mt-[50px] lg:mt-[74px] lg:ml-[96px]">House Furniture</h5>
                 <h6 className="text-[25px] text-[#72696A] font-medium font-gupter lg:mt-[41px] lg:ml-[96px]">Browse More Collection</h6>
                 </div>
                  <div className="lg:mt-[55px] mt-[30px] lg:mr-[48px] ">
                     <img src={div2Image} alt="clienTImage" />
                  </div>
             </Flex>
           </Flex> 
        </Container>
  )
}
export default Clients