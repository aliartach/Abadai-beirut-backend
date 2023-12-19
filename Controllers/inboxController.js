import Inbox from "../Models/inboxModel.js";

class InboxController{

//////////////////////////////////////////////GET ALL FUNCTION//////////////////////////
static async getAllMessages(req,res) {
    try{
        const inbox = await Inbox.findAll();
        res.status(200).json(inbox);
    }
    catch (error){
        res.status(500).json({message: error.message});
        console.log(error);
    }
};
 //////////////////////////////////////////////GET ALL FUNCTION//////////////////////////


/////////////////////////////////////////////////ADD FUNCTION//////////////////////////
  static async addMessage(req, res){                                            //
    const{firstName, lastName, email, status, message} = req.body                    //
    try{                                                                             //
        const inbox = await Inbox.create({firstName, lastName, email, status, message})
        res.status(200).json(inbox)                                                  //
    }                                                                                //
    catch (error){                                                                   //
        res.status(400).json({error: error.message})                                 //
    }                                                                                //
};                                                                                    //
/////////////////////////////////////////////////ADD FUNCTION//////////////////////////

//////////////////////////////////////////////UPDATE FUNCTION//////////////////////////
static async updateMessage(req, res){
    const { id } = req.params; 
    const { firstName, lastName, email, status, message } = req.body;
    try {
      const inbox = await Inbox.update(
        
        { firstName, lastName, email, status, message },
        { where: {id: id} }
      );

  
      if (!inbox) {
        return res.status(404).json({ error: "Message not found" });
      }
      res.status(200).json(inbox);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


//////////////////////////////////////////////UPDATE FUNCTION//////////////////////////



//////////////////////////////////////////////DELETE FUNCTION//////////////////////////
static async deleteMessage(req, res){                                          
    const { id } = req.params;                                                      
    try {
      const inbox = await Inbox.destroy({ where: { id: id } });
  
      if (!inbox) {
        return res.status(404).json({ error: "Message not found" });
      }
  
      res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  //////////////////////////////////////////////DELETE FUNCTION//////////////////////////

 



 //////////////////////////////////////////////GETID FUNCTION//////////////////////////

  static async getMessageById(req, res){
    const { id } = req.params; 
    try {
      const inbox = await Inbox.findOne({where: { id: id }});
  
      if (!inbox) {
        return res.status(404).json({ error: "Message not found" });
      }
  
      res.status(200).json(inbox);
    } catch (error) {
      res.status(500).json({ error: error.message });
    } 
  };

 //////////////////////////////////////////////GETID FUNCTION//////////////////////////
}
  

export default InboxController;