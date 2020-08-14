export class clsReceipt{
    sno:number;
    uniqueId:string;
    cycleDate:string;
    processingDate:string;
    fileName:string;
    dataReceived:string;
    sampleSentForApproval:string;
    bills:number;
    approvalReceived:number;
    prinitngCompleted:string;
    dcNumber:number;
    dcCreated:string;
    takenForDelivery : string;
    dispatchDatetime : string;
    deliveredDatetime : string;

    constructor (sno : number,uniqueId : string,cycleDate : string,
        processingDate:string,fileName : string,dataReceived : string,sampleSentForApproval : string,
        bills : number, approvalReceived : number,prinitngCompleted : string,
        dcNumber : number,dcCreated : string,takenForDelivery : string,
        dispatchDatetime : string,deliveredDatetime : string)
    {
        this.sno = sno;
        this.uniqueId = uniqueId;
        this.cycleDate = cycleDate;
        this.processingDate = processingDate;
        this.fileName = fileName;
        this.dataReceived = dataReceived;
        this.sampleSentForApproval = sampleSentForApproval;
        this.bills = bills;
        this.approvalReceived = approvalReceived;
        this.prinitngCompleted = prinitngCompleted;
        this.dcNumber = dcNumber;
        this.dcCreated = dcCreated;
        this.takenForDelivery = takenForDelivery;
        this.dispatchDatetime = dispatchDatetime;
        this.deliveredDatetime = deliveredDatetime;
    }
}