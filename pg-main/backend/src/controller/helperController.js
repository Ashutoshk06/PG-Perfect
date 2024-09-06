import complaint from "../model/complainSchema.js";
import property from "../model/propertySchema.js";

const getComplaintsSummary = async (req, res) => {
    const ownerId=req.owner.id
    try {
      const comp = await complaint.find().populate('property');
      const complaints=comp.filter((ele)=>{
        return ele.property.owner==ownerId
    })
  
      const summary = complaints.reduce(
        (acc, complaint) => {
          acc.total += 1;
          acc[complaint.type] += 1;
          return acc;
        },
        {
          total: 0,
          cleaning: 0,
          food: 0,
          maintenance: 0,
          noise: 0,
          other: 0,
        }
      );
       console.log(summary);

      res.status(200).json({
        sucess:true,
        data:summary
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getComplaintsSummaryByProperty = async (req, res) => {
    try {
      const properties = await property.find().populate('complaints');
  
      const summaryByProperty = properties.map((propertyInfo) => {
        const propertySummary = propertyInfo.complaints.reduce(
          (acc, complaint) => {
            acc.total += 1;
            acc[complaint.type] += 1;
            return acc;
          },
          {
            property: propertyInfo._id,
            name: propertyInfo.name,
            total: 0,
            cleaning: 0,
            food: 0,
            maintenance: 0,
            noise: 0,
            other: 0,
          }
        );
        return propertySummary;
      });
  
      res.status(200).json({
        sucess:true,
        data:summaryByProperty
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getComplaintsDetails = async (req, res) => {
    const { category } = req.query;
    const ownerId=req.owner.id
    try {
      const comp = await complaint.find({ type: category })
        .populate('property')
        .populate('guest', 'name room');
  
        const complaints=comp.filter((ele)=>{
            return ele.property.owner==ownerId
        })
      res.status(200).json(complaints);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export {getComplaintsSummary,getComplaintsSummaryByProperty,getComplaintsDetails}