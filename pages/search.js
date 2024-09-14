import Layout from "../components/layout";
import Nav from "../components/nav";
import utilStyles from "../styles/utils.module.css";

export default function Search(props) {
  return (
    <Layout landingPg>
      <Nav />
      <div class={`${utilStyles.flexContainer}`}>
        <div class="search-column">
          <div class="search-option">
            <h3>Distance</h3>
            <select>
              <option>Select distance</option>
              <option>0-1 miles</option>
              <option>1-3 miles</option>
              <option>3-5 miles</option>
              <option>5+ miles</option>
            </select>
          </div>
          <div class="search-option">
            <h3>College</h3>
            <select>
              <option>Select college</option>
              <option>Drexel University</option>
              <option>UPenn</option>
              <option>Temple University</option>
            </select>
          </div>
        </div>
        <div class="search-column">
          <div class="search-option">
            <h3>Min Price</h3>
            <select>
              <option>Minimum price</option>
              <option>$500</option>
              <option>$750</option>
              <option>$1000</option>
              <option>$1250</option>
            </select>
          </div>
          <div class="search-option">
            <h3>Max Price</h3>
            <select>
              <option>Maximum price</option>
              <option>$1000</option>
              <option>$1500</option>
              <option>$2000</option>
              <option>$2500+</option>
            </select>
          </div>
        </div>
        <div class="search-column">
          <div class="search-option">
            <h3>Start Date</h3>
            <select>
              <option>Start date</option>
              <option>January 2024</option>
              <option>February 2024</option>
              <option>March 2024</option>
              <option>April 2024</option>
            </select>
          </div>
          <div class="search-option">
            <h3>End Date</h3>
            <select>
              <option>End date</option>
              <option>June 2024</option>
              <option>August 2024</option>
              <option>December 2024</option>
              <option>Flexible</option>
            </select>
          </div>
        </div>
        <div class="search-column">
          <div class="search-option">
            <h3>Roommates</h3>
            <select>
              <option>Select preference</option>
              <option>Solo</option>
              <option>1 roommate</option>
              <option>2 roommates</option>
              <option>3+ roommates</option>
            </select>
          </div>
        </div>
      </div>
    </Layout>
  );
}
