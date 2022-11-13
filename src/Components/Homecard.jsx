import React, { PureComponent } from 'react'
import homecard from '../Assets/home_photo.png'
import './Homecard.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

export class Homecard extends PureComponent {
  render() {
    return (
    <div class="conteiner">
        <div class="div-home-photo">
            <img src={homecard} alt='Photo' className='card' />
        </div>
        <div class="div-home-text">
            <h1 className='home-h1'>ABOUT ME</h1>
            <div className="home-text">cxn bmnxcn bxcmnbnmbcxnm  jhb hsv b sdkjb ds bjkns dbhjkb  jkhb sb shjbv jhsv jhv jvhjsjkbfvhfjdkknfsdvbhsdmcn,smbv mnn,cn 
                    sdbvj,mnsdvmnmsvbmds,cds mndbcm,nadvmhsbnjmn,cdmvdnzscvnmdznvdzvjnm
                    vdmnvbmnzbvmnc,z.vmdmzbnvnz,dvmz.d,vxbnzxmbvz,.vn,zmdnvbzmm ,mn mn kjnbfdv bdjkfds kn lvkbdfsjk blkjdbn 
                    sdkjbvksjdbvkj bsdjkbvksdb vs kdsbv jlsbdjkvl bsdjkb vjbd vs
                    ,smdvbjsdbjvkbns dklnvk.sdn.vb sdjvbs.,dnv.msbj,vb,md nv.,sdbvmb msdnv,.nsm,dbvmn ,ndsmv m,sdnmv,nsd
                    s.d,mbv nsbdm,vn,. ams mnmdvb,m snm,vsdnvbd, mbn fm,nvm,nbfdvbn m,nd ,mvbndf jnb ,mn fm,this. knmbndvb
                    fnmfvnmvm m,dfvdmnfvkn. dsvbn,mvsd m,dsvmbvnm,ndbb dmsnvm,sdn,nsjdkfm ,dsmngdgmnbgdsm,nsd  mdnsgm,ndsg n nsmdg
                    sgnmdsbmg jmdngm,sdng,nbds md ngs,d.mgnsdgb dsmg nm,.dngm,n m,nd m,sndg.,n dgn,gn ds.,gn sdkgnbmsdgbm,
                        ,dngm,bnsmd,mf,.sdmg.,m,sg ndgsj,b sdjgmnk,dng  j njds,,dmgsnm,dsv,mn m,n dg,.sdngns.dgm ksd mn sjndbjkbsdhkjbf hb
                        m,bnm bsdjgf,msdn jn s,dmbdsg,nsdjk n jbd ,jmgbd,sjbg jnsd kn jbsdgj, bnjdg ,njk
                <div className='mail-buttons-menu'>
                    <Button><a href="https://www.instagram.com/shportko_yurii/" style={{textDecoration:'none', color:'#082379'}}><InstagramIcon fontSize='large' />Instagram</a></Button>
                    <Button><a href="https://www.instagram.com/shportko_yurii/" style={{textDecoration:'none', color:'#082379'}}><MailOutlineIcon fontSize='large' />E-MAIL</a></Button>
                    <Button><a href="https://www.instagram.com/shportko_yurii/" style={{textDecoration:'none', color:'#082379'}}> <FacebookIcon fontSize='large' />Facebook</a></Button>

                </div>
            </div>
        </div>
            <div class="div-home-card">
            </div>
    </div>
    )
  }
}

export default Homecard
