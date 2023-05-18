<template>
  <div>

  <div id="wrapper">
    <img src="../assets/my/2019.png"/>
  		<div id="content" style="height:690px;">

  			<p style="font-size:large; float:none;">
  				<strong>
  				    Home
  				</strong>
  			</p>
  			<p>
  			    Welcome to the workshop on Integrative Data Analysis in Systems Biology (IDASB 2022) in BIBM 2022!
  			</p>
  			<p>
  			    The IDASB 2022 workshop is the thirteenth in a series of workshops that aim at providing an international forum to discuss the most recent developments in the field regarding integrated data analysis approaches in systems biology research such as pattern recognition and prediction, modeling and simulation, and data representation and visualisation. The workshop will feature &quot;integrated approach&quot; and &quot;complex biological system&quot; themes. Potential topics include, but are not limited to: </p>
         		<ul>
                  <li>Large-scale or cross-species data integration for the reconstruction of networks and pathways</li>
                  <li>Genomic data analysis using systems biology approaches </li>
  				<li>Analysis, methods and tools for the data from single cells, tissue specificity, and time series </li>
                  <li>Quantitative understanding of dynamics of regulatory, signalling, interaction and metabolic networks through modelling and simulation techniques</li>
                  <li>Prediction of protein/RNA structure and biological networks interactions</li>
  				<li>Single cell multi-omics data analysis and visualization</li>
  				<li>Deep learning of complex biological or biomedical data</li>
                  <li>Data integration and knowledge driven approach in biomarker identification and drug discovery </li>
                  <li>Enhancement and enablement of knowledge discovery in functional genomics of disease and other phenotypes through integrated omics approach</li>
                  <li>Semantic webs and ontology-driven biological data integration methods</li>
  				<li>Data standardization from multi-domains</li>
  				<li>Development of integrated systems biology visualisation and analysis tools</li>
  				<li>Complex network analysis in systems biology</li>
  				<li>Integration of heterogeneous and omics data in medicine</li>
                  <li>Big data analysis in biological system</li>
  				<li>Multiscale modelling and computing in systems biology and systems medicine</li>
  				<li>Metagenomics in systems biology</li>
  				<li>Integrating approaches in transitional bioinformatics and personalized medicine</li>
  				<li>Multi-omics Integrated Database and Web service development in systems biology</li>
  				<li>Integrative analysis of spatial multi-omics data</li>
  			</ul>
              <p>
              We invite you to submit papers with unpublished, original research describing recent advances on the areas related to this workshop. All papers will undergo peer review by the conference program committee. All papers accepted will be included in the Workshop Proceedings published by the IEEE Computer Society Press and will be available at the workshops. Authors of selected papers will be invited to extend their papers for submission to a special issue in <i> International Journal of Computational Biology and Drug Design</i>.
              </p>


  		</div>
  	</div>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
