
import logo from '../../assets/logo.png'
import ellipseOrangeImg from '../../assets/ellipse-orange.png'
import ellipseGreyImg from '../../assets/ellipse-grey.png'
import Image from "next/image";
import Dropdown from "@/components/dropdown/Dropdown";
import Button from "@/components/UI/Button";
import {useTranslations} from "next-intl";
export default function Home() {
    const t = useTranslations('GuestPage')
  return (
      <section className={'w-full h-dvh relative flex flex-col justify-center items-center gap-12'}>
          <div className="absolute top-0 left-0">
              <Image src={ellipseGreyImg} alt={'grey orange'} className={'object-fill'}/>
          </div>
          <Image src={logo} alt={'logo'} className={'object-fill'}/>
          <Button btnText={'Our Menu'} btnLink={'/menu/all'}/>
            <Dropdown btnText={t('selectLang')}/>
          <div className="absolute bottom-0 right-0">
              <Image src={ellipseOrangeImg} alt={'ellipse orange'} className={'object-fill'}/>
          </div>
      </section>
  );
}
