function Shortlisted() {
  document.getElementById("Shortlist_profile").style.display = "block";
  document.getElementById("Blocklist_profile").style.display = "none";
  document.getElementById("Viewed_my_profile").style.display = "none";
  document.getElementById("Visited_profile").style.display = "none";
}
function Blocklisted() {
  document.getElementById("Blocklist_profile").style.display = "block";
  document.getElementById("Shortlist_profile").style.display = "none";
  document.getElementById("Viewed_my_profile").style.display = "none";
  document.getElementById("Visited_profile").style.display = "none";
}
function ProfileViewedBy() {
  document.getElementById("Viewed_my_profile").style.display = "block";
  document.getElementById("Shortlist_profile").style.display = "none";
  document.getElementById("Blocklist_profile").style.display = "none";
  document.getElementById("Visited_profile").style.display = "none";
}
function Visitedprofile() {
  document.getElementById("Visited_profile").style.display = "block";
  document.getElementById("Shortlist_profile").style.display = "none";
  document.getElementById("Blocklist_profile").style.display = "none";
  document.getElementById("Viewed_my_profile").style.display = "none";
}
