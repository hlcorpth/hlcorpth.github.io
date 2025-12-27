/* Disabled - alerts make website look unprofessional
(function(){
  window.openPortfolioModal = function(kind){
    var data = {
      business: {
        title: 'Business Development',
        tech: ['Consulting','Automation','BI'],
        desc: 'Strategy and implementation to drive growth and efficiency.'
      },
      outsourcing: {
        title: 'IT Outsourcing',
        tech: ['Web','Mobile','Full-stack'],
        desc: 'Scale your team with vetted engineers and clear delivery.'
      },
      marketing: {
        title: 'Digital Marketing',
        tech: ['GA4','GTM','Ads'],
        desc: 'Acquisition and analytics stack to optimize conversions.'
      }
    };
    var item = data[kind] || {title:'Project', tech:[], desc:'Details coming soon.'};
    alert(item.title + '\n' + item.desc + (item.tech.length ? ('\nTech: ' + item.tech.join(', ')) : ''));
  }
})();
*/



