import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import locationIcon from '@iconify/icons-carbon/location';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import nextOutline from '@iconify/icons-carbon/next-outline';
import './card-vacancy.css';
import LocationScheduleInfo from '../LocationScheduleInfo/location-schedule-info';

class CardVacancy extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div key={this.props.key} className="mg-b-16">
                <div className="border height-280p width-100pg border-rd-10 bg-color-gray-light flex">
                    <div>
                    <img src={this.props.imgSrc} name="vacancyImg" className="cardImg"></img>
                    <div className="mg-l-16">
                            por {this.props.ongName}
                        </div>
                    </div>
                    <div onClick={this.props.onClick} className="pd-v-16 mg-h-16 txtal-justify">
                        <div className="fw-600 fs-32p">{this.props.titulo}</div>
                        <div className="gray fw-500">
                            {this.props.description}
                        </div>
                    <LocationScheduleInfo location={this.props.location} schedule="1x por semana" />
                    </div>
                </div>
            </div>
        )
    }
};

export default CardVacancy;