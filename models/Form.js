const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    // 1-3
    isMedStudent: {
      type: Boolean,
    },

    // calculate from cbiss-personalBurnout
    burnoutScore: {
      type: Number,
    },

    // 1-4
    age: {
      type: Number,
    },
    sex: {
      type: Number,
    },
    mentalDisorder: {
      type: Number,
    },
    occupation: {
      type: String,
    },

    // 1-4_1
    gpax: {
      type: Number,
    },
    gpaxSatisfaction: {
      type: Number,
    },
    university: {
      type: Number,
    },
    year: {
      type: Number,
    },

    // 2-1 to 2-9
    cbissQ1: {
      type: Number,
    },
    cbissQ2: {
      type: Number,
    },
    cbissQ3: {
      type: Number,
    },
    cbissQ4: {
      type: Number,
    },
    cbissQ5: {
      type: Number,
    },
    cbissQ6: {
      type: Number,
    },
    cbissQ7: {
      type: Number,
    },
    cbissQ8: {
      type: Number,
    },
    cbissQ9: {
      type: Number,
    },
    cbissQ10: {
      type: Number,
    },
    cbissQ11: {
      type: Number,
    },
    cbissQ12: {
      type: Number,
    },
    cbissQ13: {
      type: Number,
    },
    cbissQ14: {
      type: Number,
    },
    cbissQ15: {
      type: Number,
    },
    cbissQ16: {
      type: Number,
    },
    cbissQ17: {
      type: Number,
    },
    cbissQ18: {
      type: Number,
    },
    cbissQ19: {
      type: Number,
    },
    cbissQ20: {
      type: Number,
    },
    cbissQ21: {
      type: Number,
    },
    cbissQ22: {
      type: Number,
    },
    cbissQ23: {
      type: Number,
    },
    cbissQ24: {
      type: Number,
    },
    cbissQ25: {
      type: Number,
    },

    // canva #33-41
    ri9Q1: {
      type: Number,
    },
    ri9Q2: {
      type: Number,
    },
    ri9Q3: {
      type: Number,
    },
    ri9Q4: {
      type: Number,
    },
    ri9Q5: {
      type: Number,
    },
    ri9Q6: {
      type: Number,
    },
    ri9Q7: {
      type: Number,
    },
    ri9Q8: {
      type: Number,
    },
    ri9Q9: {
      type: Number,
    },

    // canva #48-51
    dass21Q1: {
      type: Number,
    },
    dass21Q2: {
      type: Number,
    },
    dass21Q3: {
      type: Number,
    },
    dass21Q4: {
      type: Number,
    },
    dass21Q5: {
      type: Number,
    },
    dass21Q6: {
      type: Number,
    },
    dass21Q7: {
      type: Number,
    },
    dass21Q8: {
      type: Number,
    },
    dass21Q9: {
      type: Number,
    },
    dass21Q10: {
      type: Number,
    },
    dass21Q11: {
      type: Number,
    },
    dass21Q12: {
      type: Number,
    },
    dass21Q13: {
      type: Number,
    },
    dass21Q14: {
      type: Number,
    },
    dass21Q15: {
      type: Number,
    },
    dass21Q16: {
      type: Number,
    },
    dass21Q17: {
      type: Number,
    },
    dass21Q18: {
      type: Number,
    },
    dass21Q19: {
      type: Number,
    },
    dass21Q20: {
      type: Number,
    },
    dass21Q21: {
      type: Number,
    },

    // 2-11 to 2-13
    dreem12Q1: {
      type: Number,
    },
    dreem12Q2: {
      type: Number,
    },
    dreem12Q3: {
      type: Number,
    },
    dreem12Q4: {
      type: Number,
    },
    dreem12Q5: {
      type: Number,
    },
    dreem12Q6: {
      type: Number,
    },
    dreem12Q7: {
      type: Number,
    },
    dreem12Q8: {
      type: Number,
    },
    dreem12Q9: {
      type: Number,
    },
    dreem12Q10: {
      type: Number,
    },
    dreem12Q11: {
      type: Number,
    },
    dreem12Q12: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Form", FormSchema);
