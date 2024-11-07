(() => {
    var f = Object.create;
    var h = Object.defineProperty;
    var $ = Object.getOwnPropertyDescriptor;
    var y = Object.getOwnPropertyNames;
    var w = Object.getPrototypeOf;
    var k = Object.prototype.hasOwnProperty;
    
    var C = (l, e) => () => (e || l((e = { exports: {} }).exports, e), e.exports);
    var P = (l, e, s, r) => {
      if (e && typeof e == "object" || typeof e == "function")
        for (let n of y(e))
          !k.call(l, n) && n !== s && h(l, n, { get: () => e[n], enumerable: !(r = $(e, n)) || r.enumerable });
      return l;
    };
    var T = (l, e, s) => (s = l != null ? f(w(l)) : {}, P(e || !l || !l.__esModule ? h(s, "default", { value: l, enumerable: !0 }) : s, l));
    
    var u = C(() => {
      var m = ".cf_bcl_wc:not([data-label-id=''])";
      var i = class l {
        static broadbandLabelWidgetSet = new Set();
        
        constructor(e) {
          this.container = e;
          this.labelId = e.getAttribute("data-label-id");
          this.endpoint = `https://app.broadbandconsumerlabels.com/api/v1/widget/${this.labelId}`;
          this.init();
        }
  
        fetchData() {
          return fetch(this.endpoint)
            .then(e => e.json())
            .catch(e => {
              console.error("Error fetching widget data:", e);
            });
        }
  
        render(e) {
          let s = "", r = "";
          
          if (e.one_time_fees && e.one_time_fees.length > 0) {
            r = e.one_time_fees.map(t => `<dd class="bcl_list-none">${t.description}<span class="bcl_float-right">${t.fee}</span></dd>`).join("");
            s = `<dd class="bcl_h5 bcl_margin_top"> One-time Fees at the Time of Purchase </dd>`;
          } else {
            s = `<dt class="bcl_h5 bcl_margin_top"> One-time Fees at the Time of Purchase <span class="bcl_float-right"> None </span></dt>`;
          }
  
          let n = "", b = "";
          if (e.monthly_fees && e.monthly_fees.length > 0) {
            b = e.monthly_fees.map(t => `<dd class="bcl_list-none">${t.description}<span class="bcl_float-right">${t.fee}</span></dd>`).join("");
            n = `<dd class="bcl_h5 bcl_remove_margin"> Provider Monthly Fees </dd>`;
          } else {
            n = `<dd class="bcl_h5 bcl_remove_margin"> Provider Monthly Fees <span class="bcl_float-right"> None </span></dd>`;
          }
  
          let c = "";
          if (e.discount_bundles && e.discount_bundles.length > 0) {
            c = e.discount_bundles.map(t => `<dd class="bcl_list-none"><a href="${t.url}" target="_blank" title="${t.url}" class="bcl_link" >${t.description}</a><span class="bcl_float-right">${t.amount}</span></dd>`).join("");
          }
  
          let o = "";
          if (e.has_intro_rate) {
            o = `<dd class="bcl_remove_margin"> This Monthly Price <b>is</b> an introductory rate.<br> This rate expires after ${e.intro_period} ${e.intro_period_duration}(s) and will revert to ${e.monthly_price} per month.<br></dd>`;
          } else {
            o = `<dd class="bcl_remove_margin"> This Monthly Price <b>is not</b> an introductory rate. </dd>`;
          }
  
          let a = "";
          if (e.has_contract) {
            a = `<dd class="bcl_remove_margin"> This Monthly Price requires a ${e.contract_length} ${e.contract_duration}(s) contract.<br><a href="${e.contract_terms_url}" target="_blank" title="${e.contract_terms_url}" class="bcl_link" >Click Here</a > for contract terms. </dd>`;
          } else {
            a = `<dd class="bcl_remove_margin"> This Monthly Price <b>does not</b> require a contract. </dd>`;
          }
  
          let g = e.has_intro_rate ? `${e.intro_price}` : `${e.monthly_price}`;
          let p = "";
          if (e.include_acp_disclosure) {
            p = `<dl class="acp"><dt class="bcl_h4 bcl_remove_margin">Affordable Connectivity Program (ACP)</dt><dd class="bcl_remove_margin"> The ACP is a government program to help lower the monthly cost of internet service. To learn more about the ACP, including to find out whether you qualify, visit <a href="https://getinternet.gov" target="_blank" class="bcl_link">GetInternet.gov</a>. </dd><dd class="bcl_margin_top">Participates in the ACP <span class="bcl_float-right">${e.participate_in_acp ? "Yes" : "No"}</span></dd></dl><div class="clear-space bcl_remove_margin"></div>`;
          }
  
          let d = "";
          if (e.include_discounts_and_bundles_section) {
            e.use_custom_discounts_and_bundles_description ? d = `<dl class="discounts"><dt class="bcl_h4 bcl_remove_margin">Discounts &amp; Bundles</dt>${e.custom_discounts_and_bundles_description}</dd>${c}</dl>` : d = `<dl class="discounts"><dt class="bcl_h4 bcl_remove_margin">Discounts &amp; Bundles</dt><dd class="bcl_remove_margin"><a href="${e.discounts_url}" target="_blank" title="${e.discounts_url}" class="bcl_link">Click Here</a> for available billing discounts and pricing options for broadband service bundled with other services like video, phone, and wireless service, and use of your own equipment like modems and routers. </dd>${c}</dl>`;
          }
  
          let _ = "";
          if (e.support_email === "") {
            _ = ` Contact Us: <a href="tel:${e.support_phone}" target="_blank" title="${e.support_phone}" class="bcl_link">${e.support_phone}</a> /&nbsp; <a href="${e.support_url}" target="_blank" title="${e.support_url}" class="bcl_link">${e.support_url}</a>`;
          } else {
            _ = ` Contact Us: <a href="tel:${e.support_phone}" target="_blank" title="${e.support_phone}" class="bcl_link">${e.support_phone}</a> /&nbsp; <a href="mailto:${e.support_email}" target="_blank" title="${e.support_email}" class="bcl_link">${e.support_email}</a> /&nbsp; <a href="${e.support_url}" target="_blank" title="${e.support_url}" class="bcl_link">${e.support_url}</a>`;
          }
  
          let v = `<div class="bcl_widget-container"><div class="bcl_title"><div class="bcl_h1 bcl_remove_margin">Broadband Facts</div></div><dl class="bcl_provider"><dt class="bcl_h2 bcl_remove_margin">${e.provider_name}</dt><dt class="bcl_h3 bcl_remove_margin">${e.service_plan_name}</dt><dd class="bcl_remove_margin">${e.technology} Broadband Consumer Disclosure </dd></dl><dl class="monthly"><dt class="bcl_h4 bcl_remove_margin"> Monthly Price <span class="bcl_float-right">${g}</span></dt><dd class="clear-space bcl_remove_margin"></dd>${o} ${a}</dl><dl class="additional-charges"><dt class="bcl_h4 bcl_remove_margin">Additional Charges &amp; Terms</dt>${n} ${b} ${s} ${r}<dd class="bcl_h5 bcl_margin_top"> Early Termination Fee <span class="bcl_float-right">${e.early_termination_fee ? e.early_termination_fee : "None"}</span></dd><dd class="bcl_h5 bcl_remove_margin">Government Taxes <span class="bcl_float-right">${e.government_taxes}</span></dd></dl><div class="clear-space bcl_remove_margin"></div>${d} ${p}<dl class="speeds"><dt class="bcl_h4 bcl_remove_margin">Speeds Provided with Plan</dt><dd class="bcl_remove_margin"> Typical Download Speed <span class="bcl_float-right">${e.download_speed} ${e.download_speed_unit}</span></dd><dd class="bcl_remove_margin"> Typical Upload Speed <span class="bcl_float-right">${e.upload_speed} ${e.upload_speed_unit}</span></dd><dd class="bcl_remove_margin"> Typical Latency <span class="bcl_float-right">${e.latency} ${e.latency_unit}</span></dd></dl><div class="clear-space bcl_remove_margin"></div><dl class="data"><dt class="bcl_h4 bcl_remove_margin"> Data Included with Monthly Price <span class="bcl_float-right">${e.data_included_monthly} ${e.data_included_monthly_unit}</span></dt><dd class="bcl_remove_margin"> Charges for Additional Data Usage <span class="bcl_float-right">${e.additional_data_price} / ${e.additional_data} ${e.additional_data_unit}</span></dd></dl><div class="clear-space bcl_remove_margin"></div><dl class="policies"><dt hidden></dt><dd class="bcl_remove_margin"> Network Management <a href="${e.network_management_policy_url}" target="_blank" title="${e.network_management_policy_url}" class="bcl_float-right bcl_link">Read our Policy</a ></dd><dd class="bcl_remove_margin"> Privacy <a href="${e.privacy_policy_url}" target="_blank" title="${e.privacy_policy_url}" class="bcl_float-right bcl_link">Read our Policy</a></dd></dl><div class="clear-space bcl_remove_margin"></div><dl class="support"><dt class="bcl_h4 bcl_remove_margin">Customer Support</dt><dd class="bcl_remove_margin">${_}</dd></dl><div class="bcl_footer"><div class="bcl_remove_margin"> Learn more about the terms used on this label by visiting the Federal Communications Commission's Consumer Resource Center. </div><div class="bcl_remove_margin bcl_float-right"> &nbsp;<a href="https://fcc.gov/consumer" target="_blank" class="bcl_float-right bcl_link">fcc.gov/consumer</a></div><div class="bcl_remove_margin bcl_float-left">${e.unique_plan_id}</div></div></div>`;
          
          this.container.innerHTML = v;
        }
  
        init() {
          this.fetchData().then(e => {
            e && this.render(e);
          });
        }
  
        static renderAll() {
          document.querySelectorAll(m).forEach(s => new l(s));
        }
  
        static renderNewOnly() {
          document.querySelectorAll(m).forEach(s => {
            let r = s.getAttribute("data-label-id");
            l.broadbandLabelWidgetSet.has(r) || (l.broadbandLabelWidgetSet.add(r), new l(s));
          });
        }
      };
  
      window.BroadbandLabelWidget = i;
  
      document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(m).forEach(e => new i(e));
      });
    });
  
    var H = T(u());
  })();
  