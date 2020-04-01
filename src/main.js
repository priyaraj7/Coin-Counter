import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { coinCounterClosure, coinCounterRecursion } from "../src/coin.js";

$(document).ready(function() {
  $("#coin-counter").click(function() {
    const amount = $("#coin").val();
    $(".output").empty();
    let change = coinCounterClosure(amount);
    console.log(change);
    const result = Object.keys(change).map(deno =>
      $("<div>").text(`${deno}: ${change[deno]}`)
    );
    $(".output").append(result);
  });
});

$(document).ready(function() {
  $("#coin-counter1").click(function() {
    const coin1 = $("#coin1").val();
    $(".output1").empty();
    let change = coinCounterRecursion(coin1);

    console.log(change);
    const result = Object.keys(change).map(deno =>
      $("<div>").text(`${deno}: ${change[deno]}`)
    );
    $(".output1").append(result);
  });
});
