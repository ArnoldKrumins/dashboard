import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atomize-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  private options: Object;
  constructor() {

    this.options = {

      title: {
        text: null
      },

      credits: {
        enabled: false
      },

      chart: {
        width: 600,
        height: 300
      },

      subtitle: {
        text: 'Room price vs. occupancy & change in revenue'
      },

      xAxis: {
        gridLineWidth: 0,
        lineWidth: 2,
        offset: 20,
        tickWidth: 2,
        tickAmount: 3,
        lineColor:'#556673',
        tickColor:'#556673',

        labels: {
          format: '{value:,.0f} Kr',

          style:{

            fontSize: '12px'
          }
        },

        title: {
          text: null
        },

      },


      yAxis: [
        {
          gridLineWidth: 0,
          // max: 200,
          // min: -1607,
          lineColor: '#3C3C3C',
          tickColor: '#3C3C3C',
          lineWidth: 2,

          offset: 20,
          tickWidth: 2,
          tickAmount: 2,

          title: {
            text: null

          },
          labels: {
            format: '{value:,.0f} Kr',
            style:{
              fontSize: '12px'
            }
          }
        },
        {
          gridLineWidth: 0,
          max: 60,
          min: 20,
          lineWidth: 2,
          offset: 20,
          tickWidth: 2,
          tickAmount: 2,
          lineColor: '#A2A2A2',
          tickColor: '#A2A2A2',
          title: {
            text: null
          },
          labels: {
            format: '{value:,.0f} %',
            style: {
              fontSize: '12px'
            }
          },
          opposite: true
        }
      ],
      plotOptions: {

        spline: {

          enableMouseTracking: true,

          marker: {
            enabled: false
          }
        },
        dataLabels: {
          style: {
            color: '#FFFFFF',
            textOutline: 'none',
            fontSize: '12px'
          }
        }
      },

      legend: {
        enabled: false
      },


      series: [
        {
          name: '',
          yAxis: 0,
          type: 'spline',
          color: '#3C3C3C',
          lineWidth:2,
          label:false,
          showInLegend: false,
          data: [{ x: 595,y:-31 },{ x:645,y: 65 } , { x:695, y:90 }, {x:745 , y:155 }, { x:795 ,y:196 }, {x:845,y: 152 }, {x:945 , y:128},{
            x:1045, y: 147,

            dataLabels: {
              useHTML:true,
              shape: 'callout',
              enabled: true,
              format: '<span style="text-align: center;">max revenue increase</span><br><span style="text-align: center;"><strong>+{y}</strong> at <strong>{x:,.0f} Kr</strong></span>',
              borderRadius: 0,
              backgroundColor: '#556673',
              borderWidth: 0,
              borderColor: '#556673',
              shadow: true,
              y: -30,
              style:{
                color:'#FFFFFF',
                fontSize:'12px',
                fontWeight: 'normal',
                textOutline:null

              },

            },
            marker: { enabled:true, fillColor: '#25CC70', lineColor:'#FFFFFF',lineWidth:3, radius: 5 }
          },{x:1145 ,y: -55},{x:1245 ,y:-165},{x:1345, y: -445},{x:1445 ,y:-886}, {x:1545, y:-1237, marker: { enabled:true, fillColor: '#FFFFFF', lineColor:'#3C3C3C',lineWidth:1, radius: 4 }}, {x:1645,y:-1607}]

        },
        {
          name: '',
          type: 'spline',
          yAxis: 1,
          color: '#A2A2A2',
          lineWidth:2,
          label:true,
          showInLegend: false,

          data: [
            {x:595,y:48},
            {x:645,y:48},
            {x:695,y:48},
            {x:745,y:48},
            {x:795,y:48},
            {x:845,y:45},
            {x:945,y:45},
            {x:1045,y:45},
            {x:1145,y:45},
            {x:1245,y:42},
            {x:1345,y:42},
            {x:1445,y:42},
            {x:1545,y:42},
            {x:1645,y:39}]
        }
      ],

      exporting: {
        sourceWidth: 400,
        sourceHeight: 250,

        chartOptions: {
          subtitle: null
        }
      }
    };
  }

  ngOnInit() {
  }

}
